import PropTypes from "prop-types";

const Orders = ({url}) => {
  return (
    <div>
      orders
    </div>
  )
}


Orders.propTypes = {
  url: PropTypes.string.isRequired, // Add prop validation for 'url' prop
};

export default Orders
