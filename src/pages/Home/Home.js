import React, { useEffect, useState } from 'react';
import HomeMenu from './HomeMenu/HomeMenu';
import { useSelector, useDispatch } from 'react-redux';
import MultipleRowSlick from '../../components/RSlick/MultipleRowSlick';
import { layDanhSachPhimAction } from '../../redux/actions/QuanLyPhimAction';
import { layDanhSachHeThongRapAction } from '../../redux/actions/QuanLyRapAction/QuanLyRapAction';
import HomeCarousel from '../../templates/HomeTemplate/Layout/HomeCarousel';



export default function Home(props) {
  const { arrfilm } = useSelector(state => state.QuanLyPhimReducer);
  const { heThongRapChieu } = useSelector(state => state.QuanLyRapReducer)
  const [trailerUrl, setTrailerUrl] = useState('No Trailer')
  const dispatch = useDispatch()
  useEffect(() => {

    const action = layDanhSachPhimAction();
    dispatch(action);
    dispatch(layDanhSachHeThongRapAction());
  }, [])
  //  console.log(arrfilm);
  return (
    <div  >
      <HomeCarousel trailerUrl ={trailerUrl} setTrailerUrl = {setTrailerUrl}/>

      <section className="text-gray-600 body-font mt-8">
        <div className="container pb-8 mx-auto">
          <MultipleRowSlick arrfilm={arrfilm}  trailerUrl ={trailerUrl} setTrailerUrl = {setTrailerUrl}/>
          {/* <div className="flex flex-wrap ">
            
          {renderFilm()}

          </div> */}
        </div>
      </section>
      <div id='rapSection'></div>
      <HomeMenu heThongRapChieu={heThongRapChieu} />
    </div>
  )
}
