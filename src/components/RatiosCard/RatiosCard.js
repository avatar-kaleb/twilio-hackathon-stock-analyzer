import { Card, Elevation } from '@blueprintjs/core';
import { Cell, Column, Table } from '@blueprintjs/table';
import startCase from 'lodash/startCase';
import React from 'react';
import { formatNumber } from '../../utils/numberFormatters';
import './RatiosCard.scss';

const FinancialHealthLiquidityRatioCard = ({ entries, title }) => {
  const ratioCellRenderer = (rowIndex) => {
    return <Cell>{startCase(entries[rowIndex][0])}</Cell>;
  };

  const valueCellRenderer = (rowIndex) => {
    const value = formatNumber({
      ratio: entries[rowIndex][0],
      value: entries[rowIndex][1],
    });
    return <Cell>{value}</Cell>;
  };

  return (
    <Card interactive={false} elevation={Elevation.TWO} className='ratio-card'>
      <h4>{title}</h4>
      <Table numRows={entries.length}>
        <Column name="Ratio" cellRenderer={ratioCellRenderer} />
        <Column name="Value" cellRenderer={valueCellRenderer} />
      </Table>
    </Card>
  );
};

export default FinancialHealthLiquidityRatioCard;
