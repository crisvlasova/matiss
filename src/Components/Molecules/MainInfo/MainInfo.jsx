import React from 'react';
import style from './MainInfo.module.css';
// import cover from '../../../pictures/salon-general.png';

const MainInfo = () => {
    let direc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.392445071657!2d-58.590921184798724!3d-34.695280280435775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc714d4c52247%3A0x43ddb9d223af369f!2sMatiss%20eventos!5e0!3m2!1ses-419!2sar!4v1661396653242!5m2!1ses-419!2sar"
    return (
        <div className={style.mainInfoContainer}>
            <main className={style.mainInfo}>
                <p>Matiss Eventos, un lugar distinto</p>
            </main>
            <h2>Quienes somos?</h2>
            <div className={style.sectionContainer}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum error magni eligendi, omnis necessitatibus laboriosam tempora reiciendis tenetur excepturi similique? Amet deserunt nobis eveniet id doloremque exercitationem velit, impedit ipsa. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab praesentium odit earum, quis voluptas repudiandae maxime rem incidunt fuga commodi minus. Excepturi labore ipsa iure neque, suscipit dolor sed non? Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe distinctio ullam possimus a mollitia. Saepe ab dicta fugiat tempore voluptatibus, deserunt magni necessitatibus delectus modi velit non dolor accusamus quibusdam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, ducimus dignissimos dolores deleniti sit, ex quisquam esse velit expedita quos natus, laudantium neque. Aliquid dolor cupiditate labore consectetur placeat cum. lorem
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quis eius earum impedit nulla. Rerum voluptas totam eligendi vel explicabo, accusantium praesentium non culpa asperiores hic facere ex. Quasi, qui.
                </p>
                <iframe src={direc} height='300' width='500' loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
}

export default MainInfo;