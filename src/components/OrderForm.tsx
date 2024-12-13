import { faker } from '@faker-js/faker';
import type { FC } from 'react';
import { useForm } from 'react-hook-form';
import { v4 } from 'uuid';

import type { ApiOrderResponseData } from '@/api/order';

import { FormError } from './FormError';
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OrderFormInput>();
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
    const responseData = (await response.json()) as ApiOrderResponseData;

    updateToken(responseData.data.token);
  };

  return (
    <>
      <h5 className="font-semibold text-gray-800 mb-4">
        Order Your Spicy Manhattans!
      </h5>

      <form aria-label="form" onSubmit={handleSubmit(onSubmit)}>
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
              labelText="Country*"
              {...register(OrderFormField.Country, {
                required: true,
              })}
            >
              <option value="">Select a Country</option>
              <option value="CA">Canada</option>
              <option value="US">United States</option>
            </LabelSelect>
            <ProvinceStateSelect
              labelFor={OrderFormField.ProvinceState}
              labelText="Province / State*"
              {...register(OrderFormField.ProvinceState, {
                required: true,
              })}
            />
          </div>
          <section aria-live="polite">
            {errors.customerName && errors.customerName.type === 'pattern' && (
              <FormError>Name is invalid.</FormError>
            )}
            {errors.city && errors.city.type === 'required' && (
              <FormError>City is required.</FormError>
            )}
            {errors.country && errors.country.type === 'required' && (
              <FormError>Country is required.</FormError>
            )}
            {errors.provinceState &&
              errors.provinceState.type === 'required' && (
                <FormError>Province / State is required.</FormError>
              )}
          </section>
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
