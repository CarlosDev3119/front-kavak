import '../../../../node_modules/react-vis/dist/style.css';

import { XYPlot, LineSeries, XAxis, YAxis, VerticalGridLines, HorizontalGridLines} from 'react-vis';


export const Chart = () => {
    const data = [
        {x: 0, y: 8},
        {x: 1, y: 5},
        {x: 2, y: 4},
        {x: 3, y: 3},
        {x: 4, y: 1},
        {x: 5, y: 1},
        {x: 6, y: 7},
        {x: 7, y: 3},
        {x: 8, y: 2},
        {x: 9, y: 3},
    ]
    return(
        <div style={{ marginTop: '15px'}}>
            <XYPlot height={300} width={1380}>
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis />
                <YAxis />
                <LineSeries data={data} color="red" />
                <LineSeries data={data} color="purple" />
            </XYPlot>

        </div>
    )
}