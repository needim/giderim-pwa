import { CalendarVisionSelect } from "@/components/custom/v2/calendar-vision-select";
import { MonthlyIncomeExpenseOverviewArea } from "@/components/custom/v2/charts/monthly-income-expense-overview-area";
import { MonthlyTagOverviewBar } from "@/components/custom/v2/charts/monthly-tag-overview-bar";

export function GraphsScreen() {
	return (
		<div className="flex-1 h-svh overflow-y-auto py-4 relative">
			<div className="">
				<div className="flex items-center mb-4 px-4">
					<div className="text-3xl font-bold grow">Charts</div>
					<CalendarVisionSelect />
				</div>
			</div>

			<div className="flex flex-col space-y-6">
				<MonthlyIncomeExpenseOverviewArea />
				<MonthlyTagOverviewBar />
			</div>
		</div>
	);
}
