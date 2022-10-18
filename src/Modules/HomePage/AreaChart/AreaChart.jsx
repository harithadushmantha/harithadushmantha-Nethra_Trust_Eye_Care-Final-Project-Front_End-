import React, { Component } from 'react';
import CanvasJSReact from './assets/canvasjs.react';
import { getOperationsViaOptions, getOperationCountForChart } from '../../../Services/operationService';
import { getPatientViaOptions } from '../../../Services/patientsService';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class AreaChart extends Component {
	state = {
		year:'',
	};

	async componentDidMount() {
		const year = new Date().getFullYear();
		this.setState({year});
		const {data:arrayOfMonths} = await getOperationCountForChart();
		console.log(arrayOfMonths.operationsApr.length);
		const jan = arrayOfMonths.operationsJan.length;
		this.setState({jan})
		
		const feb = arrayOfMonths.operationsFeb.length/100;
		this.setState({feb})

		const march= arrayOfMonths.operationsMar.length/100;
		this.setState({march})

		const apr = arrayOfMonths.operationsApr.length/100;
		this.setState({apr})

		const may = arrayOfMonths.operationsMay.length/100;
		this.setState({may})

		const jun = arrayOfMonths.operationsJun.length/100;
		this.setState({jun})

		const jul = arrayOfMonths.operationsJul.length/100;
		this.setState({jul})

		const agu = arrayOfMonths.operationsAug.length/100;
		this.setState({agu})

		const sep = arrayOfMonths.operationsSep.length/100;
		this.setState({sep})

		const oct = arrayOfMonths.operationsOct.length/100;
		this.setState({oct})

		const nov = arrayOfMonths.operationsNov.length/100;
		this.setState({nov})

		const dec = arrayOfMonths.operationsDec.length/100;
		this.setState({dec})
	}

	render() {
		const options = {
			theme: "light2",
			animationEnabled: true,
			exportEnabled: true,
			title: {
				text: "Numbers of Operations"
			},
			axisY: {
				title: "Number of Operations (in Hundred )",
				includeZero: false,
			},
			data: [
			{
				type: "area",
				xValueFormatString: "MMMM",
				yValueFormatString: "###.## Hundrude",
				dataPoints: 
				 [
					{ x: new Date(this.state.year, 0), y: this.state.jan},
					{ x: new Date(this.state.year, 1), y: this.state.feb},
					{ x: new Date(this.state.year, 2), y: this.state.march},
					{ x: new Date(this.state.year, 3), y: this.state.apr},
					{ x: new Date(this.state.year, 4), y: this.state.may},
					{ x: new Date(this.state.year, 5), y: this.state.jun},
					{ x: new Date(this.state.year, 6), y: this.state.jul},
					{ x: new Date(this.state.year, 7), y: this.state.agu},
					{ x: new Date(this.state.year, 8), y: this.state.sep},
					{ x: new Date(this.state.year, 9), y: this.state.oct},
					{ x: new Date(this.state.year, 10), y: this.state.nov},
					{ x: new Date(this.state.year, 11), y: this.state.dec}
				]
			}
			]
		}

		
		
		return (
		<div >
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default AreaChart;                           