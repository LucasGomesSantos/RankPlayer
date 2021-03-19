using Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;


namespace DataBase.EntityConfig
{
    public class PlayerResultConfiguration : IEntityTypeConfiguration<ThePlayerResult>
    {
        public void Configure(EntityTypeBuilder<ThePlayerResult> builder)
        {
            builder.HasKey(x => x.Id);

        }
    }
}
