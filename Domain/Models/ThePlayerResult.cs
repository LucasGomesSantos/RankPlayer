using System;
using System.ComponentModel.DataAnnotations;


namespace Domain.Models
{
    public class ThePlayerResult
    {
        [Key]
        public int Id { get; set; }
        public long PlayerID { get; set; }
        public long TotalWin { get; set; }

        [DataType(DataType.Date)]
        public DateTime Timestamp { get; set; }
    }
}
