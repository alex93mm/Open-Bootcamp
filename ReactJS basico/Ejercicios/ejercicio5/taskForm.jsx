import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// Models
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';

const Taskform = ({ add, tasksNum }) => {

    const initialTaskValues = {
        name: '',
        description: '',
        level: LEVELS.NORMAL,
        complete: false
    }
   
    const taskSchema = Yup.object().shape(
        {
            name: Yup.string()
                .required('Task must have a name'),
            description: Yup.string()
                .max(20, 'Description cant be so long')
                .required('A description is required'),
            level: Yup.string()
                .oneOf(
                    [
                        LEVELS.NORMAL,
                        LEVELS.URGENT,
                        LEVELS.BLOCKING
                    ], 'You must select one option'
                )
        }
    )

    return (
        <div>
            <h4>New Task Form</h4>
            <Formik
                initialValues={ initialTaskValues }
                validationSchema={ taskSchema }
                onSubmit={ async (values) => {
                    const newTask = new Task(
                        values.name,
                        values.description,
                        false,
                        values.level
                    );
                    add(newTask);
                }}>
                <Form>
                    <label htmlFor='name'>Task Name</label>
                    <Field id='name' type='text' name='name' placeholder='Task name'/>
                    <ErrorMessage name='name' component='div'></ErrorMessage>
                    
                    <label htmlFor='description'>Description</label>
                    <Field id='description' type='text' name='description' placeholder='Task description'/>
                    <ErrorMessage name='description' component='div'></ErrorMessage>
                    
                    <label htmlFor='level'>Level</label>
                    <Field as='select' id='level' name='level'>
                        <option value={LEVELS.NORMAL}>Normal</option>
                        <option value={LEVELS.URGENT}>Urgent</option>
                        <option value={LEVELS.BLOCKING}>Blocking</option>
                    </Field>
                    <ErrorMessage name='level' component='div'></ErrorMessage>

                    <button type='submit'>Add Task</button>
                </Form>
            </Formik>
        </div>
    );
}

Taskform.protoTypes = {
    add: PropTypes.func.isRequired,
    taskNum: PropTypes.number.isRequired
}

export default Taskform;
