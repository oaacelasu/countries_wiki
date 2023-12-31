/**
 * File: BoldLabel.js
 * Created by: Oscar Acelas (@oacelasupegui4062@conestogac.on.ca) on August 16, 2023
 * Contributors:
 *   - Oscar Acelas (@oacelasupegui4062@conestogac.on.ca) - Added BoldLabel component
 * Last Modified: August 16, 2023
 */

import React from 'react';

function BoldLabel({label, value, weatherIcon}) {
    return (
        <p>
            {weatherIcon && <span className="weather-icon">{weatherIcon}</span>}
            <strong>{label}:</strong> {value}
        </p>
    );
}

export default BoldLabel;