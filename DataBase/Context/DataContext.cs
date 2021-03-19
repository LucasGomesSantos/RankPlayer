using DataBase.EntityConfig;
using Domain.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;

namespace MvcGameResult.Data
{
    public class DataContext : DbContext
    {

        public DataContext()
        {
            this.Database.EnsureCreated();
        }

        public DbSet<TheGameResult> gameResults { get; set; }

        public DbSet<ThePlayerResult> playerResult { get; set; }

     
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Data Source=localhost;Initial Catalog=testdb;persist security info=True;user id=sa;password=123cervello100");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();exi
            //modelBuilder.Conventions.Remove<OneToManyCascadeDeleteConvention>();
            //modelBuilder.Conventions.Remove<ManyToManyCascadeDeleteConvention>();


            modelBuilder.ApplyConfigurationsFromAssembly(typeof(GameResultConfiguration).Assembly);
            //modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());

        }

        public override int SaveChanges()
        {
            foreach (var entry in ChangeTracker.Entries().Where(entry => entry.Entity.GetType().GetProperty("Timestamp") != null))
            {
                if (entry.State == EntityState.Added)
                {
                    entry.Property("Timestamp").CurrentValue = DateTime.Now;
                }

                if (entry.State == EntityState.Modified)
                {
                    entry.Property("Timestamp").CurrentValue = DateTime.Now;
                }

                if (entry.State == EntityState.Modified)
                {
                    entry.Property("Timestamp").IsModified = false;
                }
            }
            return base.SaveChanges();
        }
    }
 }