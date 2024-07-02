import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createForm } from '../store/formSlice';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

function FormCreation() {
  const { control, handleSubmit, register } = useForm();
  const { fields, append, remove, move } = useFieldArray({
    control,
    name: 'questions',
  });

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(createForm(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Title</label>
        <input name="title" ref={register} />
      </div>
      <DragDropContext
        onDragEnd={(result) => {
          if (!result.destination) return;
          move(result.source.index, result.destination.index);
        }}
      >
        <Droppable droppableId="questions">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {fields.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided) => (
                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                      <div>
                        <label>Question</label>
                        <input name={`questions[${index}].questionText`} ref={register} defaultValue={item.questionText} />
                        <select name={`questions[${index}].questionType`} ref={register} defaultValue={item.questionType}>
                          <option value="single">Single Choice</option>
                          <option value="multiple">Multiple Choice</option>
                        </select>
                        <button type="button" onClick={() => remove(index)}>Remove</button>
                      </div>
                      <div>
                        {item.options.map((option, optionIndex) => (
                          <div key={optionIndex}>
                            <label>Option {optionIndex + 1}</label>
                            <input name={`questions[${index}].options[${optionIndex}].text`} ref={register} defaultValue={option.text} />
                          </div>
                        ))}
                        <button type="button" onClick={() => append({ text: '', isCorrect: false })}>Add Option</button>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <button type="submit">Save Form</button>
    </form>
  );
}

export default FormCreation;
