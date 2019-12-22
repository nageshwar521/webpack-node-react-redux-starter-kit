import React, { Component } from 'react';
import Container from '../../components/Layout/Container';
import Left from '../../components/Layout/Left';
import Right from '../../components/Layout/Right';
import Separator from '../../components/Separator/Separator';
import PriceLabel from '../../components/PriceLabel/PriceLabel';
import ColorField from '../../components/ColorField/ColorField';
import Select from '../../components/Select/Select';
import { Button } from '../../components/Button';
import Label from '../../components/Label/Label';

const quantityOptions = [
  { name: '1', value: 1 },
  { name: '2', value: 2 },
  { name: '3', value: 3 },
  { name: '4', value: 4 },
  { name: '5', value: 5 }
];

class CartDetails extends Component {
  state = {
    currentProduct: this.props.currentProduct
  };
  handleCartChange = (cartProp, cartValue) => {
    const { currentProduct } = this.state;
    if (currentProduct[cartProp] !== cartValue) {
      let newCurrentProduct = Object.assign({}, currentProduct, {
        [cartProp]: cartValue
      });
      this.setState(
        {
          currentProduct: newCurrentProduct
        },
        () => {
          if (this.props.onCartChange) {
            this.props.onCartChange(cartProp, this.state.currentProduct);
          }
        }
      );
    }
  };
  render() {
    const { currentProduct } = this.state;
    const { onUpdateCart } = this.props;
    // console.log('currentProduct');
    // console.log(currentProduct);
    return (
      <Container className="product-modal-container">
        <Left className="product-modal-left align-items-center flex-column">
          <Separator size={9} light className="m-v-20" />
          <Label
            className="m-v-10"
            text={currentProduct.p_variation + ' ' + currentProduct.p_name}
          />
          <PriceLabel size="big" price={currentProduct.p_price} currency="$" />
          <ColorField
            className="m-v-20 p-v-10 m-b-0 p-b-0"
            label={currentProduct.p_name}
            colors={currentProduct.p_available_options.colors}
            selectedColor={currentProduct.p_selected_color.name}
            onClick={this.handleCartChange.bind(null, 'p_selected_color')}
          />
          <div className="flex flex-row m-v-20">
            <Select
              className="m-h-5"
              label="Size"
              field="code"
              returnType="object"
              labelClass={
                !currentProduct.p_selected_size.size ? 'text-hidden' : null
              }
              options={currentProduct.p_available_options.sizes}
              selectedOption={currentProduct.p_selected_size.name}
              onSelect={this.handleCartChange.bind(null, 'p_selected_size')}
            />
            <Select
              className="m-h-5"
              label="Qty"
              field="value"
              labelClass={!currentProduct.p_quantity ? 'text-hidden' : null}
              options={quantityOptions}
              selectedOption={currentProduct.p_quantity}
              onSelect={this.handleCartChange.bind(null, 'p_quantity')}
            />
          </div>
          <div className="flex flex-row">
            <Button
              className="text-bold"
              type="primary"
              size="extra-large"
              label="Update Cart"
              onClick={onUpdateCart.bind(null, currentProduct)}
            />
          </div>
          <div className="flex flex-row m-v-10">
            <Button type="link" size="small" label="See product details" />
          </div>
        </Left>
        <Right className="product-modal-right align-items-center flex-column justify-content-center">
          <img src={`images/T${+currentProduct.p_id}.jpg`} />
        </Right>
      </Container>
    );
  }
}

export default CartDetails;