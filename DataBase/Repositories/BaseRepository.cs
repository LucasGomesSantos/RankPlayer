using Domain.Interfaces.Repositories;
using MvcGameResult.Data;
using System;
using System.Collections.Generic;

namespace DataBase.Repositories
{
    public class BaseRepository<TEntity> : IBaseRepository<TEntity> where TEntity : class
    {

        protected DataContext Db = new DataContext();

        public void Add(TEntity obj)
        {
            Db.Set<TEntity>().Add(obj);
            Db.SaveChanges();
        }

        public IEnumerable<TEntity> GetAll()
        {
            return Db.Set<TEntity>();
        }

        public TEntity GetById(int id)
        {
            return Db.Set<TEntity>().Find(id);
        }

        public void Update(TEntity obj)
        {
            Db.Set<TEntity>().Update(obj);
            Db.SaveChanges();
        }
    }
}
