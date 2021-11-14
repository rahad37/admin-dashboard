import React from 'react';
import './WidgetLg.css';

const WidgetLg = () => {
    const Button = ({type}) => {
        return <button className={'widgetLgButton ' + type}>{type}</button>
    }
    return (
        <div className='widgetLg'>
            <h3 className="widgetLgTitle">Latest Transactions</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>

                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://media.istockphoto.com/photos/confident-smiling-young-african-businessman-looking-at-camera-in-picture-id1182967311?k=20&m=1182967311&s=612x612&w=0&h=Yl8dPZJG0-PFXRz3EATlCB4kIrI-gagCVW7z77wU_Nw=" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Ahmed Mazhar</span>
                    </td>
                    <td className="widgetLgDate">12 July 2021</td>
                    <td className="widgetLgAmount">$53</td>
                    <td className="widgetLgStatus">
                        <Button type='Approved'/>
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://fashionista.com/.image/t_share/MTMxNjQ0Mjk3NjgxMzQ0OTkw/adambutcherjpg.jpg" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Mohibul Islam</span>
                    </td>
                    <td className="widgetLgDate">12 July 2021</td>
                    <td className="widgetLgAmount">$123</td>
                    <td className="widgetLgStatus">
                        <Button type='Pending'/>
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTznPZObWhCxQJFH4BoKkWOKE7UEWyaKAeQIWh3_C6h1UggYEnpp4FcDo_sOki2pvkTZv4&usqp=CAU" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Sudip Chowdury</span>
                    </td>
                    <td className="widgetLgDate">12 July 2021</td>
                    <td className="widgetLgAmount">$350</td>
                    <td className="widgetLgStatus">
                        <Button type='Declined'/>
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://clicklovegrow.com/wp-content/uploads/2019/08/9-2.jpg" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Poluk Kumar Das</span>
                    </td>
                    <td className="widgetLgDate">12 July 2021</td>
                    <td className="widgetLgAmount">$150</td>
                    <td className="widgetLgStatus">
                        <Button type='Pending'/>
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvavXyy_uR0gQoXAwZqQRKwTDeuUZKV-BCdjVv42uLPIol0745csi7AbSuZ-3kVvQm84E&usqp=CAU" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Alif Islam</span>
                    </td>
                    <td className="widgetLgDate">12 July 2021</td>
                    <td className="widgetLgAmount">$100</td>
                    <td className="widgetLgStatus">
                        <Button type='Approved'/>
                    </td>
                </tr>
            </table>
        </div>
    );
};

export default WidgetLg;