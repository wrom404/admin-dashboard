import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell } from "recharts";

const COLORS = ["#6366F1", "#8B5CF6", "#EC4899", "#10B981", "#F59E0B"];

const SALES_CHANNEL_DATA = [
	{ name: "Website", value: 45600 },
	{ name: "Mobile App", value: 38200 },
	{ name: "Marketplace", value: 29800 },
	{ name: "Social Media", value: 18700 },
];

const SalesChannelChart = () => {
	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 lg:col-span-2 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.4 }}
		>
			<h2 className='text-lg font-medium mb-4 text-gray-100'>Sales by Channel</h2>

			<div className='h-80'>
				<ResponsiveContainer>
					<BarChart data={SALES_CHANNEL_DATA}>
						<CartesianGrid strokeDasharray='3 3' stroke='#4B5563' />
						<XAxis dataKey='name' stroke='#9CA3AF' />
						<YAxis stroke='#9CA3AF' />
						<Tooltip
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#E5E7EB" }}
						/>
						<Legend />
						<Bar dataKey={"value"} fill='#8884d8'>
							{SALES_CHANNEL_DATA.map((entry, index) => (
								<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
							))}
						</Bar>
					</BarChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};
export default SalesChannelChart;


// Recharts Components: Several components from the Recharts library are imported to build the bar chart:
// 	BarChart, Bar: Core components for rendering a bar chart.
// 	XAxis, YAxis: Components for rendering the x-axis and y-axis of the chart.
// 	CartesianGrid: Adds a grid background to the chart.
// 	Tooltip: Displays information about the data points when hovered over.
// 	ResponsiveContainer: Makes the chart responsive to its parent container's size.
// 	Legend: Displays a legend explaining the color coding.
// 	Cell: Used to define individual styling for the bars in the chart.
// Data and Colors
// 	COLORS: An array of color hex codes used to fill each bar in the chart. The colors are rotated for each bar using the modulus operator.
// 	SALES_CHANNEL_DATA: An array of objects, each representing a sales channel with a name (channel name) and value (sales amount).