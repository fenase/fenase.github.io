builder.Services.AddSnowflakeIdGeneratorService(builder.Configuration.GetSection("SnowflakeIdGeneratorOptions").Get<SnowflakeIdGeneratorOptions>());
