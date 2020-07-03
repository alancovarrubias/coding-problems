def rain_mapper(rain, full_lakes, rainy_days)
    if rain > 0
        if full_lakes.include?(rain)
            return nil
        end
        rainy_days.shift()
        full_lakes.push(rain)
        return -1
    elsif rain == 0
        if full_lakes.empty?
            return 1
        elsif rainy_days.empty?
            return full_lakes.pop()
        else
            dry_lake = rainy_days.shift()
            return full_lakes.delete(dry_lake)
        end
    end
end
def avoid_flood(rains)
    full_lakes = []
    dry_day_indices = rains.filter_map.with_index { |value, index| index if value == 0 }
    return rains.map do |rain|
        pp full_lakes
        pp rainy_days
        ans = rain_mapper(rain, full_lakes, rainy_days)
        puts rain
        puts ans
        if ans
            ans
        else
            return []
        end
    end
end
pp avoid_flood([1,2,0,2,3,0,1])

