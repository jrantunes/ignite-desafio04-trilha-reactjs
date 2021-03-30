import { useRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';
import { FormHandles } from '@unform/core';

import { Modal } from "../Modal";
import { Input } from '../Input';

import { Form } from './styles';

interface FoodData {
  id: number;
  image: string;
  name: string;
  description: string;
  available: boolean;
  price: string;
}

type FoodInput = Omit<FoodData, 'id' | 'available'>

interface ModalEditFoodProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleUpdateFood: (food: FoodInput) => Promise<void>
  editingFood: Omit<FoodData, 'id' | 'available'>;
}

export function ModalEditFood({ isOpen, setIsOpen, handleUpdateFood, editingFood }: ModalEditFoodProps) {
  const formRef = useRef<FormHandles>(null);

  async function handleSubmit(data: FoodInput) {
    await handleUpdateFood(data);
    setIsOpen();
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />  
        <Input name="price" placeholder="Ex: 19.90"/>  

        <Input name="description" placeholder="Descrição" />  
        
        <button type="submit" data-testid="edit-food-button">
          <p className="text">Editar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}