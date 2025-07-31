"use client"
import {
  CartesianGrid,
  Line,
  LineChart,
  Bar,
  BarChart,
  Pie,
  PieChart,
  RadialBar,
  RadialBarChart,
  Area,
  AreaChart,
} from "recharts"

import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

export function LineChartComponent({
  data,
  categories,
  index,
  title,
}: { data: any[]; categories: string[]; index: string; title: string }) {
  return (
    <ChartContainer
      config={{
        [categories[0]]: {
          label: categories[0],
          color: "hsl(var(--chart-1))",
        },
        [categories[1]]: {
          label: categories[1],
          color: "hsl(var(--chart-2))",
        },
      }}
      className="min-h-[200px] w-full"
    >
      <LineChart
        accessibilityLayer
        data={data}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <CartesianGrid vertical={false} />
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <Line dataKey={categories[0]} type="monotone" stroke="hsl(var(--chart-1))" strokeWidth={2} dot={false} />
        {categories[1] && (
          <Line dataKey={categories[1]} type="monotone" stroke="hsl(var(--chart-2))" strokeWidth={2} dot={false} />
        )}
      </LineChart>
    </ChartContainer>
  )
}

export function BarChartComponent({
  data,
  categories,
  index,
  title,
}: { data: any[]; categories: string[]; index: string; title: string }) {
  return (
    <ChartContainer
      config={{
        [categories[0]]: {
          label: categories[0],
          color: "hsl(var(--chart-1))",
        },
        [categories[1]]: {
          label: categories[1],
          color: "hsl(var(--chart-2))",
        },
      }}
      className="min-h-[200px] w-full"
    >
      <BarChart
        accessibilityLayer
        data={data}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <CartesianGrid vertical={false} />
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <Bar dataKey={categories[0]} fill="hsl(var(--chart-1))" radius={4} />
        {categories[1] && <Bar dataKey={categories[1]} fill="hsl(var(--chart-2))" radius={4} />}
      </BarChart>
    </ChartContainer>
  )
}

export function PieChartComponent({
  data,
  categories,
  index,
  title,
}: { data: any[]; categories: string[]; index: string; title: string }) {
  return (
    <ChartContainer
      config={{
        [categories[0]]: {
          label: categories[0],
          color: "hsl(var(--chart-1))",
        },
        [categories[1]]: {
          label: categories[1],
          color: "hsl(var(--chart-2))",
        },
      }}
      className="min-h-[200px] w-full"
    >
      <PieChart>
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <Pie
          data={data}
          dataKey={categories[0]}
          nameKey={index}
          innerRadius={60}
          outerRadius={80}
          strokeWidth={2}
          fill="hsl(var(--chart-1))"
        />
      </PieChart>
    </ChartContainer>
  )
}

export function RadialBarChartComponent({
  data,
  categories,
  index,
  title,
}: { data: any[]; categories: string[]; index: string; title: string }) {
  return (
    <ChartContainer
      config={{
        [categories[0]]: {
          label: categories[0],
          color: "hsl(var(--chart-1))",
        },
        [categories[1]]: {
          label: categories[1],
          color: "hsl(var(--chart-2))",
        },
      }}
      className="min-h-[200px] w-full"
    >
      <RadialBarChart data={data} innerRadius="10%" outerRadius="80%" startAngle={90} endAngle={-270}>
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <RadialBar dataKey={categories[0]} fill="hsl(var(--chart-1))" />
      </RadialBarChart>
    </ChartContainer>
  )
}

export function AreaChartComponent({
  data,
  categories,
  index,
  title,
}: { data: any[]; categories: string[]; index: string; title: string }) {
  return (
    <ChartContainer
      config={{
        [categories[0]]: {
          label: categories[0],
          color: "hsl(var(--chart-1))",
        },
        [categories[1]]: {
          label: categories[1],
          color: "hsl(var(--chart-2))",
        },
      }}
      className="min-h-[200px] w-full"
    >
      <AreaChart
        accessibilityLayer
        data={data}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <CartesianGrid vertical={false} />
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <Area
          dataKey={categories[0]}
          type="monotone"
          fill="hsl(var(--chart-1))"
          stroke="hsl(var(--chart-1))"
          stackId="a"
        />
        {categories[1] && (
          <Area
            dataKey={categories[1]}
            type="monotone"
            fill="hsl(var(--chart-2))"
            stroke="hsl(var(--chart-2))"
            stackId="a"
          />
        )}
      </AreaChart>
    </ChartContainer>
  )
}
