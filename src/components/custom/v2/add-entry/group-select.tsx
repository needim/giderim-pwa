import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem } from "@/components/ui/select";
import type { TGroupId } from "@/evolu-db";
import { groupsQuery } from "@/evolu-queries";
import { useLocalization } from "@/hooks/use-localization";
import { useQuery } from "@evolu/react";
import { SelectTrigger } from "@radix-ui/react-select";
import { IconCategory2 } from "@tabler/icons-react";

export function GroupSelect({
	value,
	onValueChange,
}: {
	value: string | undefined;
	onValueChange: (value: TGroupId) => void;
}) {
	const groups = useQuery(groupsQuery);
	const { m } = useLocalization();
	return (
		<Select onValueChange={onValueChange} value={value || "no-group"}>
			<SelectTrigger asChild>
				<Button
					variant="outline"
					className="justify-start shrink-0 rounded"
					disableScale
				>
					<IconCategory2 className="-left-1.5 relative text-muted-foreground size-5 shrink-0" />
					<span className="truncate max-w-24">
						{groups.rows.find((g) => g.id === value)?.name || (
							<span className="text-muted-foreground">{m.Group()}</span>
						)}
					</span>
				</Button>
			</SelectTrigger>
			<SelectContent>
				<SelectItem value="no-group">{m.Group()}</SelectItem>
				{groups.rows.map((group) => (
					<SelectItem key={group.id} value={group.id}>
						{group.name}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	);
}
