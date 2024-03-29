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
    /// Справочник товаров.
    /// </summary>
    // *** Start programmer edit section *** (Товары CustomAttributes)

    // *** End programmer edit section *** (Товары CustomAttributes)
    [AutoAltered()]
    [Caption("Справочник товаров")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ТоварыE", new string[] {
            "КодТовара as \'Код товара\'",
            "Название as \'Название\'",
            "ЦенаЗаЕд as \'Цена за ед\'"})]
    [AssociatedDetailViewAttribute("ТоварыE", "ВНаличии", "ВНаличииE", true, "", "В наличии", true, new string[] {
            ""})]
    [View("ТоварыL", new string[] {
            "КодТовара as \'Код товара\'",
            "Название as \'Название\'",
            "ЦенаЗаЕд as \'Цена за ед\'"})]
    public class Товары : ICSSoft.STORMNET.DataObject
    {
        
        private int fКодТовара;
        
        private double fЦенаЗаЕд;
        
        private string fНазвание;
        
        private IIS.Test15.DetailArrayOfВНаличии fВНаличии;
        
        // *** Start programmer edit section *** (Товары CustomMembers)

        // *** End programmer edit section *** (Товары CustomMembers)

        
        /// <summary>
        /// КодТовара.
        /// </summary>
        // *** Start programmer edit section *** (Товары.КодТовара CustomAttributes)

        // *** End programmer edit section *** (Товары.КодТовара CustomAttributes)
        [NotNull()]
        public virtual int КодТовара
        {
            get
            {
                // *** Start programmer edit section *** (Товары.КодТовара Get start)

                // *** End programmer edit section *** (Товары.КодТовара Get start)
                int result = this.fКодТовара;
                // *** Start programmer edit section *** (Товары.КодТовара Get end)

                // *** End programmer edit section *** (Товары.КодТовара Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Товары.КодТовара Set start)

                // *** End programmer edit section *** (Товары.КодТовара Set start)
                this.fКодТовара = value;
                // *** Start programmer edit section *** (Товары.КодТовара Set end)

                // *** End programmer edit section *** (Товары.КодТовара Set end)
            }
        }
        
        /// <summary>
        /// Название.
        /// </summary>
        // *** Start programmer edit section *** (Товары.Название CustomAttributes)

        // *** End programmer edit section *** (Товары.Название CustomAttributes)
        [StrLen(255)]
        public virtual string Название
        {
            get
            {
                // *** Start programmer edit section *** (Товары.Название Get start)

                // *** End programmer edit section *** (Товары.Название Get start)
                string result = this.fНазвание;
                // *** Start programmer edit section *** (Товары.Название Get end)

                // *** End programmer edit section *** (Товары.Название Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Товары.Название Set start)

                // *** End programmer edit section *** (Товары.Название Set start)
                this.fНазвание = value;
                // *** Start programmer edit section *** (Товары.Название Set end)

                // *** End programmer edit section *** (Товары.Название Set end)
            }
        }
        
        /// <summary>
        /// ЦенаЗаЕд.
        /// </summary>
        // *** Start programmer edit section *** (Товары.ЦенаЗаЕд CustomAttributes)

        // *** End programmer edit section *** (Товары.ЦенаЗаЕд CustomAttributes)
        public virtual double ЦенаЗаЕд
        {
            get
            {
                // *** Start programmer edit section *** (Товары.ЦенаЗаЕд Get start)

                // *** End programmer edit section *** (Товары.ЦенаЗаЕд Get start)
                double result = this.fЦенаЗаЕд;
                // *** Start programmer edit section *** (Товары.ЦенаЗаЕд Get end)

                // *** End programmer edit section *** (Товары.ЦенаЗаЕд Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Товары.ЦенаЗаЕд Set start)

                // *** End programmer edit section *** (Товары.ЦенаЗаЕд Set start)
                this.fЦенаЗаЕд = value;
                // *** Start programmer edit section *** (Товары.ЦенаЗаЕд Set end)

                // *** End programmer edit section *** (Товары.ЦенаЗаЕд Set end)
            }
        }
        
        /// <summary>
        /// Справочник товаров.
        /// </summary>
        // *** Start programmer edit section *** (Товары.ВНаличии CustomAttributes)

        // *** End programmer edit section *** (Товары.ВНаличии CustomAttributes)
        public virtual IIS.Test15.DetailArrayOfВНаличии ВНаличии
        {
            get
            {
                // *** Start programmer edit section *** (Товары.ВНаличии Get start)

                // *** End programmer edit section *** (Товары.ВНаличии Get start)
                if ((this.fВНаличии == null))
                {
                    this.fВНаличии = new IIS.Test15.DetailArrayOfВНаличии(this);
                }
                IIS.Test15.DetailArrayOfВНаличии result = this.fВНаличии;
                // *** Start programmer edit section *** (Товары.ВНаличии Get end)

                // *** End programmer edit section *** (Товары.ВНаличии Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Товары.ВНаличии Set start)

                // *** End programmer edit section *** (Товары.ВНаличии Set start)
                this.fВНаличии = value;
                // *** Start programmer edit section *** (Товары.ВНаличии Set end)

                // *** End programmer edit section *** (Товары.ВНаличии Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ТоварыE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ТоварыE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ТоварыE", typeof(IIS.Test15.Товары));
                }
            }
            
            /// <summary>
            /// "ТоварыL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ТоварыL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ТоварыL", typeof(IIS.Test15.Товары));
                }
            }
        }
    }
}
