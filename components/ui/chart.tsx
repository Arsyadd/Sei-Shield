"use client"

import * as React from "react"
import * as RechartsPrimitive from "recharts"

import { cn } from "@/lib/utils"

// Workaround for https://github.com/recharts/recharts/issues/3615
const Customized = <T,>(
  props: T & {
    component: React.ComponentType<T>
  },
) => {
  const { component: Component, ...rest } = props
  return <Component {...rest} />
}

const ChartContext = React.createContext<{
  config: ChartConfig
} | null>(null)

type ChartConfig = {
  [k: string]: {
    label?: string
    icon?: React.ComponentType
    color?: string
  }
}

type ChartContainerProps = {
  config: ChartConfig
  children: React.ReactNode
} & React.ComponentPropsWithoutRef<"div">

const ChartContainer = React.forwardRef<HTMLDivElement, ChartContainerProps>(
  ({ config, className, children, ...props }, ref) => {
    const id = React.useId()
    return (
      <ChartContext.Provider value={{ config }}>
        <div
          ref={ref}
          className={cn("flex h-[350px] w-full flex-col items-center justify-center", className)}
          {...props}
        >
          <svg className="h-full w-full" width="100%" height="100%">
            <defs>
              {Object.entries(config).map(([key, item]) => {
                if (item.color) {
                  return (
                    <filter id={`chart-${id}-${key}`} key={key}>
                      <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor={item.color} floodOpacity="0.3" />
                    </filter>
                  )
                }
                return null
              })}
            </defs>
            {children}
          </svg>
        </div>
      </ChartContext.Provider>
    )
  },
)
ChartContainer.displayName = "ChartContainer"

const ChartTooltip = ({ ...props }: React.ComponentPropsWithoutRef<typeof RechartsPrimitive.Tooltip>) => {
  const { config } = useChart()
  const { active, payload, label } = props

  if (active && payload && payload.length) {
    return (
      <div
        className={cn(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border bg-background px-3 py-2 text-sm shadow-md",
        )}
      >
        {label ? <div className="text-muted-foreground">{label}</div> : null}
        <div className="grid gap-1.5">
          {payload.map((item, index) => {
            const key = item.dataKey as keyof typeof config

            return (
              <div key={item.dataKey} className="flex items-center justify-between gap-4">
                {config[key]?.icon ? (
                  <Customized component={config[key].icon} className="h-3 w-3" />
                ) : (
                  <div className={cn("h-2 w-2 shrink-0 rounded-full", item.color)} />
                )}
                <span>{config[key]?.label || key}</span>
                {item.value && (
                  <span className="font-mono font-medium tabular-nums text-foreground">
                    {item.value.toLocaleString()}
                  </span>
                )}
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  return null
}

const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof RechartsPrimitive.Tooltip>
>(({ stroke, children, className, ...props }, ref) => (
  <RechartsPrimitive.Tooltip content={<ChartTooltip className={className} stroke={stroke} {...props} />} {...props} />
))
ChartTooltipContent.displayName = "ChartTooltipContent"

const ChartLegend = ({ ...props }: React.ComponentPropsWithoutRef<typeof RechartsPrimitive.Legend>) => {
  const { config } = useChart()

  return (
    <RechartsPrimitive.Legend
      content={({ payload }) => {
        return (
          <ul className={cn("flex flex-wrap items-center justify-center gap-2", props.className)}>
            {payload?.map((item) => {
              const key = item.dataKey as keyof typeof config
              if (!config[key]) {
                return null
              }

              return (
                <li
                  key={key}
                  onClick={() => props.onClick?.(item)}
                  className={cn(
                    "flex items-center gap-1.5",
                    props.verticalAlign === "top" ? "flex-col" : "flex-row",
                    item.inactive && "opacity-50",
                  )}
                >
                  {config[key]?.icon ? (
                    <Customized component={config[key].icon} className="h-3 w-3" />
                  ) : (
                    <div className={cn("h-2 w-2 shrink-0 rounded-full", item.color)} />
                  )}
                  {config[key]?.label}
                </li>
              )
            })}
          </ul>
        )
      }}
      {...props}
    />
  )
}

const ChartLegendContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof RechartsPrimitive.Legend>
>(({ className, ...props }, ref) => (
  <RechartsPrimitive.Legend content={<ChartLegend className={className} {...props} />} {...props} />
))
ChartLegendContent.displayName = "ChartLegendContent"

const ChartCrosshair = React.forwardRef<any, React.ComponentPropsWithoutRef<typeof RechartsPrimitive.Crosshair>>(
  ({ className, ...props }, ref) => (
    <RechartsPrimitive.Crosshair ref={ref} className={cn("stroke-border", className)} {...props} />
  ),
)
ChartCrosshair.displayName = "ChartCrosshair"

const ChartLabel = React.forwardRef<any, React.ComponentPropsWithoutRef<typeof RechartsPrimitive.Label>>(
  ({ className, ...props }, ref) => (
    <RechartsPrimitive.Label ref={ref} className={cn("fill-foreground text-sm", className)} {...props} />
  ),
)
ChartLabel.displayName = "ChartLabel"

const ChartLabelList = React.forwardRef<any, React.ComponentPropsWithoutRef<typeof RechartsPrimitive.LabelList>>(
  ({ className, ...props }, ref) => (
    <RechartsPrimitive.LabelList ref={ref} className={cn("fill-foreground text-sm", className)} {...props} />
  ),
)
ChartLabelList.displayName = "ChartLabelList"

const ChartAxis = React.forwardRef<any, React.ComponentPropsWithoutRef<typeof RechartsPrimitive.XAxis>>(
  ({ className, ...props }, ref) => (
    <RechartsPrimitive.XAxis
      ref={ref}
      className={cn(
        "text-sm [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-tooltip-cursor]:fill-border",
        className,
      )}
      {...props}
    />
  ),
)
ChartAxis.displayName = "ChartAxis"

const ChartPolarGrid = React.forwardRef<any, React.ComponentPropsWithoutRef<typeof RechartsPrimitive.PolarGrid>>(
  ({ className, ...props }, ref) => (
    <RechartsPrimitive.PolarGrid ref={ref} className={cn("stroke-border", className)} {...props} />
  ),
)
ChartPolarGrid.displayName = "ChartPolarGrid"

const ChartPolarAngleAxis = React.forwardRef<
  any,
  React.ComponentPropsWithoutRef<typeof RechartsPrimitive.PolarAngleAxis>
>(({ className, ...props }, ref) => (
  <RechartsPrimitive.PolarAngleAxis
    ref={ref}
    className={cn("text-sm [&_.recharts-polar-angle-axis-tick_text]:fill-muted-foreground", className)}
    {...props}
  />
))
ChartPolarAngleAxis.displayName = "ChartPolarAngleAxis"

const ChartPolarRadiusAxis = React.forwardRef<
  any,
  React.ComponentPropsWithoutRef<typeof RechartsPrimitive.PolarRadiusAxis>
>(({ className, ...props }, ref) => (
  <RechartsPrimitive.PolarRadiusAxis
    ref={ref}
    className={cn("text-sm [&_.recharts-polar-radius-axis-tick_text]:fill-muted-foreground", className)}
    {...props}
  />
))
ChartPolarRadiusAxis.displayName = "ChartPolarRadiusAxis"

const ChartRadialBar = React.forwardRef<any, React.ComponentPropsWithoutRef<typeof RechartsPrimitive.RadialBar>>(
  ({ className, ...props }, ref) => {
    const { config } = useChart()
    const color = config[props.dataKey as keyof typeof config]?.color

    return (
      <RechartsPrimitive.RadialBar
        ref={ref}
        className={cn("stroke-background", className)}
        fill={color ? `hsl(${color})` : undefined}
        stroke={color ? `hsl(${color})` : undefined}
        {...props}
      />
    )
  },
)
ChartRadialBar.displayName = "ChartRadialBar"

const ChartLine = React.forwardRef<any, React.ComponentPropsWithoutRef<typeof RechartsPrimitive.Line>>(
  ({ className, ...props }, ref) => {
    const { config } = useChart()
    const color = config[props.dataKey as keyof typeof config]?.color

    return (
      <RechartsPrimitive.Line
        ref={ref}
        className={cn("stroke-background", className)}
        stroke={color ? `hsl(${color})` : undefined}
        {...props}
      />
    )
  },
)
ChartLine.displayName = "ChartLine"

const ChartArea = React.forwardRef<any, React.ComponentPropsWithoutRef<typeof RechartsPrimitive.Area>>(
  ({ className, ...props }, ref) => {
    const { config } = useChart()
    const color = config[props.dataKey as keyof typeof config]?.color

    return (
      <RechartsPrimitive.Area
        ref={ref}
        className={cn("fill-background stroke-background", className)}
        fill={color ? `hsl(${color})` : undefined}
        stroke={color ? `hsl(${color})` : undefined}
        {...props}
      />
    )
  },
)
ChartArea.displayName = "ChartArea"

const ChartBar = React.forwardRef<any, React.ComponentPropsWithoutRef<typeof RechartsPrimitive.Bar>>(
  ({ className, ...props }, ref) => {
    const { config } = useChart()
    const color = config[props.dataKey as keyof typeof config]?.color

    return (
      <RechartsPrimitive.Bar
        ref={ref}
        className={cn("fill-background stroke-background", className)}
        fill={color ? `hsl(${color})` : undefined}
        stroke={color ? `hsl(${color})` : undefined}
        {...props}
      />
    )
  },
)
ChartBar.displayName = "ChartBar"

const ChartPie = React.forwardRef<any, React.ComponentPropsWithoutRef<typeof RechartsPrimitive.Pie>>(
  ({ className, ...props }, ref) => {
    const { config } = useChart()
    const color = config[props.dataKey as keyof typeof config]?.color

    return (
      <RechartsPrimitive.Pie
        ref={ref}
        className={cn("stroke-background", className)}
        fill={color ? `hsl(${color})` : undefined}
        stroke={color ? `hsl(${color})` : undefined}
        {...props}
      />
    )
  },
)
ChartPie.displayName = "ChartPie"

const ChartRadar = React.forwardRef<any, React.ComponentPropsWithoutRef<typeof RechartsPrimitive.Radar>>(
  ({ className, ...props }, ref) => {
    const { config } = useChart()
    const color = config[props.dataKey as keyof typeof config]?.color

    return (
      <RechartsPrimitive.Radar
        ref={ref}
        className={cn("stroke-background", className)}
        fill={color ? `hsl(${color})` : undefined}
        stroke={color ? `hsl(${color})` : undefined}
        {...props}
      />
    )
  },
)
ChartRadar.displayName = "ChartRadar"

const ChartScatter = React.forwardRef<any, React.ComponentPropsWithoutRef<typeof RechartsPrimitive.Scatter>>(
  ({ className, ...props }, ref) => {
    const { config } = useChart()
    const color = config[props.dataKey as keyof typeof config]?.color

    return (
      <RechartsPrimitive.Scatter
        ref={ref}
        className={cn("stroke-background", className)}
        fill={color ? `hsl(${color})` : undefined}
        stroke={color ? `hsl(${color})` : undefined}
        {...props}
      />
    )
  },
)
ChartScatter.displayName = "ChartScatter"

const ChartTooltipProvider = ({ ...props }: React.ComponentPropsWithoutRef<typeof RechartsPrimitive.Tooltip>) => {
  const { children, ...rest } = props
  return (
    <RechartsPrimitive.Tooltip
      contentStyle={{
        boxShadow: "none",
        padding: "0",
        border: "none",
      }}
      wrapperStyle={{ outline: "none" }}
      {...rest}
    >
      {children}
    </RechartsPrimitive.Tooltip>
  )
}
ChartTooltipProvider.displayName = "ChartTooltipProvider"

const useChart = () => {
  const context = React.useContext(ChartContext)
  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />")
  }
  return context
}

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartCrosshair,
  ChartLabel,
  ChartLabelList,
  ChartAxis,
  ChartPolarGrid,
  ChartPolarAngleAxis,
  ChartPolarRadiusAxis,
  ChartRadialBar,
  ChartLine,
  ChartArea,
  ChartBar,
  ChartPie,
  ChartRadar,
  ChartScatter,
  ChartTooltipProvider,
}
