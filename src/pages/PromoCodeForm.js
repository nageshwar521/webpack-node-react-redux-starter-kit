import React from 'react';
import Container from '../components/Layout/Container';
import Left from '../components/Layout/Left';
import Right from '../components/Layout/Right';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';

function PromoCodeForm(props) {
  return (
    <Container className="promocode-container">
      <Left className="promocode-label text-uppercase">
        Enter Promotion Code or Gift Card
      </Left>
      <Right className="promocode-form">
        <Input className="promocode-input" onChange={props.onChange} value={props.value} />
        <Button className="promocode-button" label="Apply" type="bordered" onClick={props.onSubmit} />
      </Right>
    </Container>
  );
}

export default PromoCodeForm;
