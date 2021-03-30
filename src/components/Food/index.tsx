import { useState } from 'react';
import { FiEdit3, FiTrash } from 'react-icons/fi';

import { api } from '../../services/api';

import { Container } from './styles';

interface FoodData {
  id: number;
  image: string;
  name: string;
  description: string;
  available: boolean;
  price: string;
}

interface FoodProps {
  food: FoodData;
  handleDeleteFood: (id: number) => Promise<void>
  handleEditFood: (food: FoodData) => void;
}

export function Food({ food, handleDeleteFood, handleEditFood }: FoodProps) {
  const [isAvailable, setIsAvailable] = useState(food.available);
  
  async function toggleAvailable() {
    await api.put(`/foods/${food.id}`, {
      ...food,
      available: !isAvailable,
    });

    setIsAvailable(!isAvailable);
  }

  async function setEditingFood() {
    await handleEditFood(food);
  }

  return (
    <Container available={isAvailable}>
      <header>
        <img src={food.image} alt={food.name}/>
      </header>

      <section className="body">
        <h2>{food.name}</h2>
        <p>{food.description}</p>
        <p className="price">R$ <b>{food.price}</b></p>
      </section>

      <section className="footer">
        
        <div className="icon-container">
          <button 
            type="button" 
            onClick={setEditingFood} 
            className="icon"
            data-testid={`edit-food-${food.id}`}  
          >
            <FiEdit3 size={20} />
          </button>
          <button 
            onClick={() => handleDeleteFood(food.id)} 
            type="button" 
            className="icon"
            data-testid={`remove-food-${food.id}`}  
          >
            <FiTrash size={20} />
          </button>
        </div>

        <div className="availability-container">
          <p>{ isAvailable ? 'Disponível' : 'Indisponível' }</p>

          <label htmlFor={`available-switch-${food.id}`} className="switch">
            <input 
              id={`available-switch-${food.id}`}
              type="checkbox"
              checked={isAvailable}
              onChange={toggleAvailable}
              data-testid={`change-status-food-${food.id}`}
            />
            <span className="slider" />  
          </label>
        </div>

      </section>

    </Container>
  );
}