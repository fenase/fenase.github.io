var builder = WebApplication.CreateBuilder(args);

builder.Services.AddSnowflakeIdGeneratorService();
