DateTime customEpoch = new DateTime(year: 2020, month: 1, day: 1, hour: 0, minute: 0, second: 0, DateTimeKind.Utc);

// Creando la clase generadora
SnowflakeIDGenerator generator = new SnowflakeIDGenerator(machineId, customEpoch);

// ¡También funciona si se usa la clase como estática!
SnowflakeIDGenerator.GetSnowflake(machineId, customEpoch)
