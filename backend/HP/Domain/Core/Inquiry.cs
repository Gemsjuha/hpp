using System;

namespace HP.Domain.Core
{
    class Inquiry
    {
        public int Id { get; set; }

        public virtual Request Request {get; set; }

        public virtual Supplier Supplier { get; set; }

        public DateTime Date { get; set; }
    }
}
