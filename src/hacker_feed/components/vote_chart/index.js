import React from 'react';

import { Chart } from 'react-charts';

const VoteChart = (props) => {
    const data = React.useMemo(
        () => [ { label: 'Votes', data: props.hits } ],
        [props.hits]
      )
    const getDatums = React.useCallback(series => series.data, []);
    const getPrimary = React.useCallback( (datum) =>  datum.objectID, [] )
    const getSecondary = React.useCallback(datum => datum.points, [])

    const axes = React.useMemo(() => [
        {
            primary: true,
            type: 'ordinal',
            position: 'bottom'
        },
        {
            type: 'linear',
            position: 'left',
            stacked: false,
            gridOffset: 100,
            spacing: 100
        }], [])
    const getLabel = React.useCallback(series => "Votes", [])
    
    return (
        <div className="vote-chart-container">
            {props.hits && <div className="legend-y">
                <svg>
                    <g transform="translate(30, 140) rotate(-90)">
                        <text>Votes</text>
                    </g>
                </svg>
            </div>}
            <div className="chart">
                {props.hits && <Chart data={data}
                    getDatums={getDatums}
                    getPrimary={getPrimary}
                    getSecondary={getSecondary}
                    axes={axes}
                    getLabel={getLabel} tooltip/> }
            </div>
            {props.hits && <div className="legend-x">ID</div>}
        </div>
    )
}

export default VoteChart;