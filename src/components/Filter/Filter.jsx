import React from 'react';
import s from './Filter.module.css';

const Filter = ({ value, onChange }) => (
    <label className={ s.label}>
        Name filter <input type="text" value={value} onChange={onChange} />
    </label>
);

export default Filter;