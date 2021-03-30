import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { Food } from '../../components/Food';
import { ModalAddFood } from '../../components/ModalAddFood';
import { ModalEditFood } from '../../components/ModalEditFood';

import { api } from '../../services/api';

import { FoodsContainer } from './styles';

interface FoodData {
  id: number;
  image: string;
  name: string;
  description: string;
  available: boolean;
  price: string;
}

type FoodInput = Omit<FoodData, 'id' | 'available'>

export function Dashboard() {
  const [foods, setFoods] = useState<FoodData[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editingFood, setEditingFood] = useState<FoodData>({} as FoodData);

  useEffect(() => {
    api.get('/foods')
      .then(response => setFoods(response.data));
  }, []);

  async function handleAddFood(food: FoodInput) {
    try {
      const response = await api.post('/foods', {
        ...food,
        available: true,
      });

      setFoods([ ...foods, response.data ]);
    } catch(err) {
      console.log(err);
    }
  }

  async function handleUpdateFood(food: FoodInput) {
    try {
      const foodUpdated = await api.put(`/foods/${editingFood.id}`, {
        ...editingFood,
        ...food,
      });

      const foodsUpdated = foods.map(food => 
        food.id !== foodUpdated.data.id ? food : foodUpdated.data
      );

      setFoods(foodsUpdated);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleDeleteFood(id: number) {
    await api.delete(`/foods/${id}`);

    const foodsFiltered = foods.filter(food => food.id !== id);

    setFoods(foodsFiltered);
  }
  
  function toggleModal() {
    setModalOpen(!modalOpen);
  }

  function toggleEditModal() {
    setEditModalOpen(!editModalOpen);
  }

  function handleEditFood(food: FoodData) {
    setEditingFood(food);
    setEditModalOpen(true);
  }

  return (
    <>
      <Header openModal={toggleModal} />
      <ModalAddFood 
        isOpen={modalOpen}
        setIsOpen={toggleModal}
        handleAddFood={handleAddFood}
      />
      <ModalEditFood 
        isOpen={editModalOpen}
        setIsOpen={toggleEditModal}
        handleUpdateFood={handleUpdateFood}
        editingFood={editingFood}
      />

      <FoodsContainer>
        {foods.map(food => (
          <Food 
            key={food.id}
            food={food}
            handleDeleteFood={handleDeleteFood}
            handleEditFood={handleEditFood}
          />
        ))}
      </FoodsContainer>
    </>
  );
}