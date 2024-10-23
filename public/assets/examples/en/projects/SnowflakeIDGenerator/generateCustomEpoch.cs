DateTime customEpoch = new DateTime(year: 2020, month: 1, day: 1, hour: 0, minute: 0, second: 0, DateTimeKind.Utc);

// Creating the generator class
SnowflakeIDGenerator generator = new SnowflakeIDGenerator(machineId, customEpoch);

// This works when using as static too!
SnowflakeIDGenerator.GetSnowflake(machineId, customEpoch)
