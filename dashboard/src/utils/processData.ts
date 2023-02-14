import { DataPoint } from "@prisma/client"

export const processData = (data: DataPoint[]) => {
    return data.map((item) => {
      return { data: item.dataPoint, time: `${item.createdAt.toLocaleDateString()} ${item.createdAt.toLocaleTimeString()}` }
    })
  }