const React = require('react');
const Default = require('./layouts/default');

const New = () => {
    return(
        <Default>
            <h2>Add a new bread</h2>
            <form action='/breads' method='POST'>
                <label htmlFor='name'>Name</label>
                <input 
                    type='text'
                    name='name'
                    id='name' 
                    required
                />
                <label htmlFor="image">Image</label>
                <input 
                    type="text"
                    name='image'
                    id='image'
                 />
                 <label htmlFor="hasGluten">Has Gluten?</label>
                 <input 
                    type="checkbox"
                    name='hasGluten'
                    id='hasGluten'
                  />
                  <br />
                  <input type="submit" />
            </form>
            <div className='backButton'>
                <a href="/breads">
                    <button>Go Back To Index</button>
                </a>
            </div>
        </Default>
    );
};

module.exports = New;
