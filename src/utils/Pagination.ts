import { BadRequestException } from '@nestjs/common';

interface IPagination {
  limit: number;
  offset: number;
}

export class Pagination {
  private props: IPagination;
  constructor({ limit = 10, offset = 0 }) {
    this.props = {
      limit: this.parseInteger(limit),
      offset: this.parseInteger(offset),
    };
  }

  private parseInteger(value: string | number) {
    const parsedValue = parseInt(value.toString(), 10);
    if (isNaN(parsedValue)) {
      throw new BadRequestException('Value must be a number');
    }

    if (parsedValue < 0) {
      throw new BadRequestException('Value must be greater than 0');
    }
    return parsedValue;
  }

  set limit(limit: number | string) {
    this.props.limit = this.parseInteger(limit);
  }

  get limit(): number {
    return this.props.limit;
  }

  set offset(offset: number | string) {
    this.props.offset = this.parseInteger(offset);
  }

  get offset(): number {
    return this.props.offset;
  }
}
