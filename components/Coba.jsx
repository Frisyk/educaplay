'use client';

import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const DraggableOption = ({ option, index, type }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type,
    item: { index, type },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`p-4 bg-white border rounded-lg shadow-md cursor-pointer ${isDragging ? 'opacity-50' : 'opacity-100'}`}
      style={{ marginBottom: '8px' }}
    >
      {option.text}
    </div>
  );
};

const DroppableCell = ({ category, accept, onDrop, children }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept,
    drop: (item) => onDrop(category, item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <td
      ref={drop}
      className={`py-4 px-6 bg-gray-50 border rounded-lg ${isOver ? 'bg-gray-200' : 'bg-gray-50'}`}
      style={{ minHeight: '80px', verticalAlign: 'top' }}
    >
      {children}
    </td>
  );
};

const DroppableOptionList = ({ accept, onDrop, children }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept,
    drop: (item) => onDrop(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={`flex flex-col space-y-4 ${isOver ? 'bg-gray-200' : 'bg-gray-100'}`}
      style={{ padding: '8px', minHeight: '100px' }}
    >
      {children}
    </div>
  );
};

const TaskPage = () => {
  const initialOptions = [
    { id: 'summarization', text: 'Summarization' },
    { id: 'textGeneration', text: 'Text Generation' },
    { id: 'informationRetrieval', text: 'Information Retrieval' },
    { id: 'translation', text: 'Translation' },
  ];

  const [options, setOptions] = useState(initialOptions);
  const [answers, setAnswers] = useState({
    summarization: '',
    textGeneration: '',
    informationRetrieval: '',
    translation: '',
  });

  const handleDrop = (category, item) => {
    const option = options[item.index];
    if (option) {
      setAnswers((prev) => ({ ...prev, [category]: option.text }));
      setOptions((prev) => prev.map((opt, idx) => (idx === item.index ? { ...opt, text: '' } : opt)));
    }
  };

  const handleOptionDrop = (item) => {
    const option = options[item.index];
    if (option) {
      setOptions((prev) => prev.map((opt, idx) => (idx === item.index ? initialOptions[item.index] : opt)));
      setAnswers((prev) =>
        Object.fromEntries(Object.entries(prev).map(([key, value]) => (value === option.text ? [key, ''] : [key, value])))
      );
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="p-8 bg-white rounded-lg shadow-md max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Quiz Question</h1>
        <p className="mb-4">Match the task description to the corresponding LLM use case</p>

        <DroppableOptionList accept={Object.keys(answers)} onDrop={handleOptionDrop}>
          {options.map((option, index) =>
            option.text ? (
              <DraggableOption key={option.id} option={option} index={index} type={option.id} />
            ) : null
          )}
        </DroppableOptionList>

        <table className="min-w-full bg-white mt-6">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-gray-200">Task Description</th>
              <th className="py-2 px-4 bg-gray-200">LLM Use Case</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="py-2 px-4">Write an email to ask about a severe weather cancellation policy</td>
              <DroppableCell category="summarization" accept={Object.keys(answers)} onDrop={handleDrop}>
                {answers.summarization ? (
                  <div className="flex justify-between items-center bg-white border rounded-lg shadow-md p-4">
                    {answers.summarization}
                    <button
                      onClick={() => handleOptionDrop({ index: options.findIndex((opt) => opt.text === answers.summarization) })}
                    >
                      &times;
                    </button>
                  </div>
                ) : ''}
              </DroppableCell>
            </tr>
            <tr className="border-t">
              <td className="py-2 px-4">Convert a transcript from a virtual lecture into high-level lecture notes</td>
              <DroppableCell category="textGeneration" accept={Object.keys(answers)} onDrop={handleDrop}>
                {answers.textGeneration ? (
                  <div className="flex justify-between items-center bg-white border rounded-lg shadow-md p-4">
                    {answers.textGeneration}
                    <button
                      onClick={() => handleOptionDrop({ index: options.findIndex((opt) => opt.text === answers.textGeneration) })}
                    >
                      &times;
                    </button>
                  </div>
                ) : ''}
              </DroppableCell>
            </tr>
            <tr className="border-t">
              <td className="py-2 px-4">Locate the slide deck containing the latest quarterly results</td>
              <DroppableCell category="informationRetrieval" accept={Object.keys(answers)} onDrop={handleDrop}>
                {answers.informationRetrieval ? (
                  <div className="flex justify-between items-center bg-white border rounded-lg shadow-md p-4">
                    {answers.informationRetrieval}
                    <button
                      onClick={() => handleOptionDrop({ index: options.findIndex((opt) => opt.text === answers.informationRetrieval) })}
                    >
                      &times;
                    </button>
                  </div>
                ) : ''}
              </DroppableCell>
            </tr>
            <tr className="border-t">
              <td className="py-2 px-4">Convert a code snippet from R to Python</td>
              <DroppableCell category="translation" accept={Object.keys(answers)} onDrop={handleDrop}>
                {answers.translation ? (
                  <div className="flex justify-between items-center bg-white border rounded-lg shadow-md p-4">
                    {answers.translation}
                    <button
                      onClick={() => handleOptionDrop({ index: options.findIndex((opt) => opt.text === answers.translation) })}
                    >
                      &times;
                    </button>
                  </div>
                ) : ''}
              </DroppableCell>
            </tr>
          </tbody>
        </table>

        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Submit</button>
      </div>
    </DndProvider>
  );
};

export default TaskPage;
