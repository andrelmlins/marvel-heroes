import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Input, Row, Button } from 'react-materialize';

const input = ({ s, name, label, value }) => (
    <Input s={s} name={name} label={label} value={value} />
);

const HeroForm = props => {
  const { handleSubmit, superpower, group } = props;
  console.log(superpower);
  return (
    <form onSubmit={handleSubmit}>
        <Row>
            <Field s={6}
                label="Super Power"
                name="superpower"
                value={superpower}
                component={input} />
            <Field s={6}
                label="Group"
                name="group"
                value={group}
                component={input} />
        </Row>
        <div className="right">
            <Button type="submit" className='red'>Submit Edition</Button>
        </div>
        <br /><br />
    </form>
  )
}

export default reduxForm({
  form: 'simple' // a unique identifier for this form
})(HeroForm)