import { motion } from "framer-motion";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

const categoryData = [
	{ name: "Electronics", value: 4500 },
	{ name: "Clothing", value: 3200 },
	{ name: "Home & Garden", value: 2800 },
	{ name: "Books", value: 2100 },
	{ name: "Sports & Outdoors", value: 1900 },
];

const COLORS = ["#6366F1", "#8B5CF6", "#EC4899", "#10B981", "#F59E0B"];

const CategoryDistributionChart = () => {
	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.3 }}
		>
			<h2 className='text-lg font-medium mb-4 text-gray-100'>Category Distribution</h2>
			<div className='h-80'>
				<ResponsiveContainer width={"100%"} height={"100%"}>
					<PieChart >
						<Pie
							data={categoryData}
							cx={"50%"}
							cy={"50%"}
							labelLine={false}
							outerRadius={80}
							fill='#8884d8'
							dataKey='value'
							label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
						>
							{categoryData.map((entry, index) => (
								<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
							))}
						</Pie>
						<Tooltip
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#E5E7EB" }}
						/>
						<Legend />
					</PieChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};
export default CategoryDistributionChart;


// Explanation
// Pie chart
//   data={categoryData}: Binds the categoryData array to the pie chart, making each object a slice.
//   cx={"50%"} & cy={"50%"}: Centers the pie chart within its container.
//   labelLine={false}: Hides the line connecting the labels to the pie slices.
//   outerRadius={80}: Sets the radius of the pie chart, controlling its size.
//   fill='#8884d8': Default fill color, though individual slices are overridden by Cell colors.
//   dataKey='value': Specifies which key from categoryData determines the size of each slice (the value key).
//   label={({ name, percent }) => ${name} ${(percent * 100).toFixed(0)}%}: Adds labels inside each slice showing the category name and its percentage share, calculated dynamically.

// cell component 
//   Iterates over categoryData and creates a Cell for each slice.
//   fill={COLORS[index % COLORS.length]}: Fills each slice with a color from the COLORS array, cycling through colors if there are more slices than colors.

// Tooltip
//   Displays a tooltip when hovering over slices, with customized background and text colors for readability.

// Legend 
//   Displays a legend to help users identify what each color represents.