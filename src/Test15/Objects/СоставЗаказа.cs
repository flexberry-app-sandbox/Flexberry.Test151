﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Test15
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Состав заказа.
    /// </summary>
    // *** Start programmer edit section *** (СоставЗаказа CustomAttributes)

    // *** End programmer edit section *** (СоставЗаказа CustomAttributes)
    [AutoAltered()]
    [Caption("Состав заказа")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("СоставЗаказаE", new string[] {
            "Номер as \'Номер\'",
            "Товары as \'Товары\'",
            "Товары.Название as \'Название\'",
            "Товары.ЦенаЗаЕд as \'Цена за единицу\'",
            "Количество as \'Количество\'"}, Hidden=new string[] {
            "Товары.Название"})]
    [MasterViewDefineAttribute("СоставЗаказаE", "Товары", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Название")]
    public class СоставЗаказа : ICSSoft.STORMNET.DataObject
    {
        
        private int fНомер;
        
        private int fКоличество;
        
        private IIS.Test15.Товары fТовары;
        
        private IIS.Test15.Заказы fЗаказы;
        
        // *** Start programmer edit section *** (СоставЗаказа CustomMembers)

        // *** End programmer edit section *** (СоставЗаказа CustomMembers)

        
        /// <summary>
        /// Количество.
        /// </summary>
        // *** Start programmer edit section *** (СоставЗаказа.Количество CustomAttributes)

        // *** End programmer edit section *** (СоставЗаказа.Количество CustomAttributes)
        public virtual int Количество
        {
            get
            {
                // *** Start programmer edit section *** (СоставЗаказа.Количество Get start)

                // *** End programmer edit section *** (СоставЗаказа.Количество Get start)
                int result = this.fКоличество;
                // *** Start programmer edit section *** (СоставЗаказа.Количество Get end)

                // *** End programmer edit section *** (СоставЗаказа.Количество Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СоставЗаказа.Количество Set start)

                // *** End programmer edit section *** (СоставЗаказа.Количество Set start)
                this.fКоличество = value;
                // *** Start programmer edit section *** (СоставЗаказа.Количество Set end)

                // *** End programmer edit section *** (СоставЗаказа.Количество Set end)
            }
        }
        
        /// <summary>
        /// Номер.
        /// </summary>
        // *** Start programmer edit section *** (СоставЗаказа.Номер CustomAttributes)

        // *** End programmer edit section *** (СоставЗаказа.Номер CustomAttributes)
        [NotNull()]
        public virtual int Номер
        {
            get
            {
                // *** Start programmer edit section *** (СоставЗаказа.Номер Get start)

                // *** End programmer edit section *** (СоставЗаказа.Номер Get start)
                int result = this.fНомер;
                // *** Start programmer edit section *** (СоставЗаказа.Номер Get end)

                // *** End programmer edit section *** (СоставЗаказа.Номер Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СоставЗаказа.Номер Set start)

                // *** End programmer edit section *** (СоставЗаказа.Номер Set start)
                this.fНомер = value;
                // *** Start programmer edit section *** (СоставЗаказа.Номер Set end)

                // *** End programmer edit section *** (СоставЗаказа.Номер Set end)
            }
        }
        
        /// <summary>
        /// Состав заказа.
        /// </summary>
        // *** Start programmer edit section *** (СоставЗаказа.Товары CustomAttributes)

        // *** End programmer edit section *** (СоставЗаказа.Товары CustomAttributes)
        [PropertyStorage(new string[] {
                "Товары"})]
        [NotNull()]
        public virtual IIS.Test15.Товары Товары
        {
            get
            {
                // *** Start programmer edit section *** (СоставЗаказа.Товары Get start)

                // *** End programmer edit section *** (СоставЗаказа.Товары Get start)
                IIS.Test15.Товары result = this.fТовары;
                // *** Start programmer edit section *** (СоставЗаказа.Товары Get end)

                // *** End programmer edit section *** (СоставЗаказа.Товары Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СоставЗаказа.Товары Set start)

                // *** End programmer edit section *** (СоставЗаказа.Товары Set start)
                this.fТовары = value;
                // *** Start programmer edit section *** (СоставЗаказа.Товары Set end)

                // *** End programmer edit section *** (СоставЗаказа.Товары Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Test15.Заказы.
        /// </summary>
        // *** Start programmer edit section *** (СоставЗаказа.Заказы CustomAttributes)

        // *** End programmer edit section *** (СоставЗаказа.Заказы CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "Заказы"})]
        public virtual IIS.Test15.Заказы Заказы
        {
            get
            {
                // *** Start programmer edit section *** (СоставЗаказа.Заказы Get start)

                // *** End programmer edit section *** (СоставЗаказа.Заказы Get start)
                IIS.Test15.Заказы result = this.fЗаказы;
                // *** Start programmer edit section *** (СоставЗаказа.Заказы Get end)

                // *** End programmer edit section *** (СоставЗаказа.Заказы Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СоставЗаказа.Заказы Set start)

                // *** End programmer edit section *** (СоставЗаказа.Заказы Set start)
                this.fЗаказы = value;
                // *** Start programmer edit section *** (СоставЗаказа.Заказы Set end)

                // *** End programmer edit section *** (СоставЗаказа.Заказы Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "СоставЗаказаE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СоставЗаказаE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СоставЗаказаE", typeof(IIS.Test15.СоставЗаказа));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of СоставЗаказа.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfСоставЗаказа CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfСоставЗаказа CustomAttributes)
    public class DetailArrayOfСоставЗаказа : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Test15.DetailArrayOfСоставЗаказа members)

        // *** End programmer edit section *** (IIS.Test15.DetailArrayOfСоставЗаказа members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type СоставЗаказа by index.
        /// </summary>
        /// <summary>
        /// Adds object with type СоставЗаказа.
        /// </summary>
        public DetailArrayOfСоставЗаказа(IIS.Test15.Заказы fЗаказы) : 
                base(typeof(СоставЗаказа), ((ICSSoft.STORMNET.DataObject)(fЗаказы)))
        {
        }
        
        public IIS.Test15.СоставЗаказа this[int index]
        {
            get
            {
                return ((IIS.Test15.СоставЗаказа)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Test15.СоставЗаказа dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
