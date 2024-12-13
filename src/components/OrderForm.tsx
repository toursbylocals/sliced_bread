import { faker } from '@faker-js/faker';
import type { FC } from 'react';
import { useForm } from 'react-hook-form';

import type { OrderResponseData } from '@/api/order';

import { v4 } from 'uuid';
import { LabelInput } from './LabelInput';
import { LabelSelect } from './LabelSelect';
import { ProvinceStateSelect } from './ProvinceStateSelect';

type OrderFormProps = {
  updateToken: (token: string) => void;
};

export type OrderFormInput = {
  city: string;
  country: string;
  customerName: string;
  numberOfDrinks: number;
  provinceState: string;
};

export enum OrderFormField {
  City = 'city',
  Country = 'country',
  CustomerName = 'customerName',
  NumberOfDrinks = 'numberOfDrinks',
  ProvinceState = 'provinceState',
}

export const OrderForm: FC<OrderFormProps> = ({ updateToken }) => {
  const { register, handleSubmit } = useForm<OrderFormInput>();
  const DEFAULT_PATTERN = /^[A-Za-z -]+$/i;
  const onSubmit = async (formData: OrderFormInput) => {
    if (!formData.customerName) {
      formData.customerName = faker.person.fullName();
    }

    if (!formData.numberOfDrinks) {
      formData.numberOfDrinks = faker.number.int({ min: 1, max: 99 });
    }

    const finalData = { ...formData, orderId: v4() };

    const response = await fetch('/api/order', {
      body: JSON.stringify(finalData),
      method: 'POST',
    });
    const responseData = (await response.json()) as OrderResponseData;

    updateToken(responseData.data.token);
  };

  return (
    <>
      <h5 className="font-semibold text-gray-800 mb-4">
        Order Your Spicy Manhattans!
      </h5>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-4">
          <div className="flex gap-4">
            <LabelInput
              labelFor={OrderFormField.CustomerName}
              labelText="Name"
              {...register(OrderFormField.CustomerName, {
                pattern: DEFAULT_PATTERN,
              })}
            />
            <LabelInput
              inputType="number"
              labelFor={OrderFormField.NumberOfDrinks}
              labelText="Number of Drinks"
              {...register(OrderFormField.NumberOfDrinks)}
            />
          </div>
          <div className="flex gap-4">
            <LabelInput
              labelFor={OrderFormField.City}
              labelText="City*"
              {...register(OrderFormField.City, {
                required: true,
                pattern: DEFAULT_PATTERN,
              })}
            />
            <LabelSelect
              labelFor={OrderFormField.Country}
              labelText="Country"
              {...register(OrderFormField.Country, {
                required: true,
              })}
            >
              <option value="CA">Canada</option>
              <option value="US">United States</option>
            </LabelSelect>
            <ProvinceStateSelect
              labelFor={OrderFormField.ProvinceState}
              labelText="Province / State"
              {...register(OrderFormField.ProvinceState, {
                required: true,
              })}
            />
          </div>
          <div className="flex">
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get Your Drinks!
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
