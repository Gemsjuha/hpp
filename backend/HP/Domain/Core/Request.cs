using System;
using System.Collections.Generic;

namespace HP.Domain.Core
{
    class Request
    {
        public Request()
        {
            Inquiries = new HashSet<Inquiry>();
        }

        public int Id { get; set; }

        public DateTime Date { get; set; }
        
        public string Description { get; set; }
        
        public virtual Vehicule Vehicule { get; set; }
        
        public virtual ICollection<Inquiry> Inquiries { get; set; }
    }
}
