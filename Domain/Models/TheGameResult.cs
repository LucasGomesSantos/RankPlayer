using System;
using System.ComponentModel.DataAnnotations;

namespace Domain.Models
{
    public class TheGameResult
    {
        [Key]
        public int Id { get; set; }
        public long PlayerID { get; set; }
        public long GameID { get; set; }
        public long Win { get; set; }

        [DataType(DataType.Date)]
        public DateTime Timestamp { get; set; }
    }
}