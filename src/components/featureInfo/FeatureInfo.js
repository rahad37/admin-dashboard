import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import React from 'react';
import './FeatureInfo.css';

const FeatureInfo = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2415</span>
                    <span className="featuredMoneyRate">
                        -11.4 <ArrowDownward className='featuredIcon negative'/>
                    </span>
                </div>
                <div className="featuredSub">Compared to last month</div>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$4415</span>
                    <span className="featuredMoneyRate">
                        -5.4 <ArrowDownward className='featuredIcon negative'/>
                    </span>
                </div>
                <div className="featuredSub">Compared to last month</div>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$1415</span>
                    <span className="featuredMoneyRate">
                        +2.4 <ArrowUpward className='featuredIcon'/>
                    </span>
                </div>
                <div className="featuredSub">Compared to last month</div>
            </div>
        </div>
    );
};

export default FeatureInfo;