// UseEffectApi.js
import React, { useEffect, useState } from 'react';
import Looding from './github/Looding';
import logoo2 from './github/logoo2.png';
import { Modal, Button } from 'react-bootstrap';
import Contact from './github/Contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

const UseEffectApi = () => {
  const [user, setUser] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [notificationCount, setNotificationCount] = useState(0);

  const getProductCategories = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products/categories");
      const categories = await response.json();
      return categories;
    } catch (error) {
      console.log("Error fetching categories", error);
      return [];
    }
  };

  const getUsers = async () => {
    try {
      const categories = await getProductCategories();

      if (searchTerm && !categories.includes(searchTerm.toLowerCase())) {
        alert(`Category "${searchTerm}" not found in product categories.`);
        return;
      }

      const response = await fetch("https://fakestoreapi.com/products");
      setLoading(false);
      const products = await response.json();

      const filteredProducts = searchTerm
        ? products.filter(product => product.category.toLowerCase() === searchTerm.toLowerCase())
        : products;

      setUser(filteredProducts);
    } catch (error) {
      setLoading(false);
      console.log("My Error", error);
    }
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
    setModalMessage(`${product.title} has been added to the cart.`);
    setShowModal(true);

    setTimeout(() => {
      setModalMessage('');
      setShowModal(false);
    }, 3000);

    const updatedUser = user.filter((item) => item.id !== product.id);
    setUser(updatedUser);

    
    setNotificationCount(notificationCount + 1);
  };

  const handleSearch = () => {
    setSearchTerm('');
    getUsers();
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const delaySearch = setTimeout(() => {
      getUsers();
    }, 500);

    return () => clearTimeout(delaySearch);
  }, [searchTerm]);

  if (loading) {
    return <Looding />;
  }

  return (
    <>
      <nav className="navbar bg-light text-dark">
        <div className="logo">
          <img src={logoo2} alt="Logo" width="100" />
        </div>
        <a href="#home" className='text-black'>Home</a>
        <a href="#services" className='text-black'>Services</a>
        <a href="#contact" onClick={handleContactClick} className='text-black'>Contact</a>
        <div className="notification-icon text-black" onClick={() => setNotificationCount('')}>
          <FontAwesomeIcon icon={faBell} />
          {notificationCount > 0 && (
            <div className="notification-count above-icon">{notificationCount}</div>
          )}
        </div>
        <div className="search text-black" style={{ marginRight: '30px' }}>
          <input
            type="text"
            placeholder="Search by Category"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </nav>

      <div className='p-3 mb-2 bg-white text-black'>
        <div className='row text-center'>
          {user.map((data) => (
            <div className='col-3 col-md-4 mt-5' key={data.id}>
              <div className='card p-2 w-100 h-100 bg-light text-dark'>
                <div className='d-flex align-items-center'>
                  <div className='image'>
                    <img src={data.image} className='rounded' width='100' height='100' alt={data.title} />
                  </div>
                  <div className='ml-3 w-100'>
                    <h4 className='mb-0 mt-0 textLeft fs-6'>{data.title}</h4>
                    <span className='textLeft'>Quality product</span>
                    <div className='p-2 mt-2 bg-promary d-flex justify-content-between rounded text-white stats bg-white'>
                      <div className='d-flex flex-column'>
                        <span className='articles '>Price</span> <span className='number1'>{data.price}</span>{" "}
                      </div>
                      <div className='d-flex flex-column'>
                        <span className='followers'>Count</span> <span className='number2'>{data.rating.count}</span>
                      </div>
                      <div className='d-flex flex-column'>
                        <span className='rating'>Rating</span> <span className='number3'>{data.rating.rate}</span>
                      </div>
                    </div>
                    <div className='d-flex justify-content-center'>
                      <button onClick={() => addToCart(data)} className="btn btn-danger btn-sm">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Contact />

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Product Added to Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p style={{ fontSize: 'small' }}>{modalMessage}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <footer className="bg-light text-dark text-center">
        <p style={{fontSize :"2em"}}>&copy;  Marina Mall. All Rights Reserved.</p>
      </footer>
    </>
  );
};

export default UseEffectApi;
