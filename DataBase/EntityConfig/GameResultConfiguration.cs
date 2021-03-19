using Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;


namespace DataBase.EntityConfig
{
    public class GameResultConfiguration : IEntityTypeConfiguration<TheGameResult>
    {
        public void Configure(EntityTypeBuilder<TheGameResult> builder)
        {
            builder.HasKey(x => x.Id);

        }
    }
}
