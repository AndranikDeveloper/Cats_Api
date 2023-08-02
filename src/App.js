import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { resetCatsAC } from './Redux/reducer';
import addCatsTC from './Redux/thunk';
import ShowCats from './components/ShowCats/ShowCats';
import preloader from './assets/Spinner-1s-200px (3).svg'

function App() {
  const cats = useSelector(state => state.catsReducer.cats)
  const isLoading = useSelector(state => state.catsReducer.isLoading)
  const dispatch = useDispatch()

  const categories = React.useMemo(() => ([
    { categoryId: null, title: 'None' },
    { categoryId: 5, title: 'Boxes' },
    { categoryId: 15, title: 'Clothes' },
    { categoryId: 1, title: 'Hats' },
    { categoryId: 14, title: 'Sinks' },
    { categoryId: 2, title: 'Space' },

  ]), [])

  const [category, setCategory] = React.useState(null)

  const changeCategories = (newCategory) => {
    if (category === newCategory) return
    dispatch(resetCatsAC([]))
    setCategory(newCategory)
  }

  return (
    <div className="app">

      <div className='selection'>
        <select className='select' onChange={e => changeCategories(e.target.value)}>
          {
            categories.map(({ categoryId, title }) => (
              <option className='select__option' key={categoryId} value={categoryId}>{title}</option>
            ))
          }
        </select>
      </div>


      <div className='container'>
        {
          isLoading
            ? <img className='preloader' src={preloader} />
            :
            <div className='content'>
              {
                cats.map(cat => (
                  <ShowCats key={cat.id} categories={categories} category={category} {...cat} />
                ))
              }
            </div>
        }
      </div>



      <div className='add__button'>
        <button className='btn' onClick={() => dispatch(addCatsTC({ category }))}>{cats.length ? 'Show More' : 'Show Cats'}</button>
      </div>



    </div>
  );
}

export default App;
