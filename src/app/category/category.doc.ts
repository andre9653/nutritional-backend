import { ApiResponseOptions } from '@nestjs/swagger';

export const findAllDoc: ApiResponseOptions = {
  description: 'List of categories',
  isArray: true,
  schema: {
    type: 'array',
    items: {
      type: 'object',
      properties: {
        id: { type: 'string' },
        name: { type: 'string' },
      },
    },
  },
};

export const findOneDoc: ApiResponseOptions = {
  description: 'Category',
  schema: {
    type: 'object',
    properties: {
      id: { type: 'string' },
      name: { type: 'string' },
    },
  },
};

export const findQueryDoc: ApiResponseOptions = {
  description: 'Category',
  isArray: true,
  schema: {
    type: 'array',
    items: {
      type: 'object',
      properties: {
        id: { type: 'string' },
        name: { type: 'string' },
      },
    },
  },
};

export const createDoc: ApiResponseOptions = {
  description: 'Category',
  schema: {
    type: 'object',
    properties: {
      id: { type: 'string' },
      name: { type: 'string' },
    },
    example: {
      name: 'Category 1',
    },
  },
};
