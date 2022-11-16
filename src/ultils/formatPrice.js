import React from 'react'

const formatPrice = (price) => {
    return price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
}

export default formatPrice