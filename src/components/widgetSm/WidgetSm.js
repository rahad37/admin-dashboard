import { Visibility } from '@material-ui/icons';
import React from 'react';
import './WidgetSm.css';

const WidgetSm = () => {
    return (
        <div className='widgetSm'>
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Rahim Mia</span>
                        <span className="widgetSmUserTitle">Web Developer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className='widgetSmIcon'/>Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Jahidul Islam</span>
                        <span className="widgetSmUserTitle">Accountant</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className='widgetSmIcon'/>Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://cdn2.momjunction.com/wp-content/uploads/2021/02/What-Is-A-Sigma-Male-And-Their-Common-Personality-Trait-910x1024.jpg" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Shahin Mollah</span>
                        <span className="widgetSmUserTitle">Student</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className='widgetSmIcon'/>Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZLbGYytOlD9VGApZn68STwAeeyP5lcOiIvA&usqp=CAU" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Showruv Das</span>
                        <span className="widgetSmUserTitle">Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className='widgetSmIcon'/>Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://media.istockphoto.com/photos/good-looking-male-business-professional-in-studio-picture-id1201437847?k=20&m=1201437847&s=612x612&w=0&h=aEAuVkOaQMxUUGoO8Awo0hEsAhlnb3wQxrQQiD4oauQ=" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Proshanjeet Nath</span>
                        <span className="widgetSmUserTitle">Doctor</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className='widgetSmIcon' />Display
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default WidgetSm;