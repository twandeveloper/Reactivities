import React, { ChangeEvent, useState } from 'react';

import {
  Form,
  Button,
  FormInput,
  FormTextArea,
  Segment,
} from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';

interface Props {
  activity: Activity | undefined;
  closeForm: () => void;
  createOrEdit: (activity: Activity) => void;

}

const ActivityForm = ({ activity: selectedActivity, closeForm, createOrEdit }: Props) => {
  const initialState = selectedActivity ?? {
    id: '',
    title: '',
    category: '',
    description: '',
    date: '',
    city: '',
    venue: '',
  };

  const [activity, setActivity] = useState(initialState);

  const handleSubmit = () => {
    createOrEdit(activity)
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setActivity({ ...activity, [name]: value });
  };

  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit} autoComplete='off'>
        <FormInput
          placeholder='Title'
          value={activity.title}
          name='title'
          onChange={handleInputChange}
        />
        <FormTextArea
          placeholder='Description'
          value={activity.description}
          name='description'
          onChange={handleInputChange}
        />
        <FormInput
          placeholder='Category'
          value={activity.category}
          name='category'
          onChange={handleInputChange}
        />
        <FormInput
          placeholder='Date'
          value={activity.date}
          name='date'
          onChange={handleInputChange}
        />
        <FormInput
          placeholder='City'
          value={activity.city}
          name='city'
          onChange={handleInputChange}
        />
        <FormInput
          placeholder='Venue'
          value={activity.venue}
          name='venue'
          onChange={handleInputChange}
        />
        <Button floated='right' positive type='submit' content='Submit' />
        <Button
          floated='right'
          type='button'
          content='Cancel'
          onClick={closeForm}
        />
      </Form>
    </Segment>
  );
};

export default ActivityForm;
