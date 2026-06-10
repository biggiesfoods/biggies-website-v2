import PriceTag from "@/components/menu/price-tag";
import Image from "next/image";

interface MultiPrice {
  small: number;
  medium?: number;
  large: number;
}

type MenuItem = {
  item: string;
  price: number | MultiPrice;
  description: string;
  unit?: string;
  image: string;
  minimum_order?: number;
};

export function formatPrice(price: number): string {
  return Number.isInteger(price)
    ? price.toString()
    : price.toFixed(2).toString();
}

export function PriceDisplay({
  label,
  children,
}: {
  label: string;
  children: string;
}) {
  return (
    <span className="flex flex-col justify-center items-center">
      <span className="text-gray-400 dark:text-gray-300 transition-colors duration-(--duration-animate) text-[10px] uppercase">
        {label}
      </span>{" "}
      <PriceTag>{children}</PriceTag>
    </span>
  );
}

export const MenuSection = ({
  id = "",
  info = "",
  title,
  items,
}: {
  id?: string;
  info?: string;
  title: string;
  items: MenuItem[];
}) => {
  return (
    <div>
      {info !== "" && (
        <div className="w-full flex justify-center">
          <p className="max-w-60 mb-4 transition-colors duration-(--duration-animate)">
            {info}
          </p>
        </div>
      )}
      {items.map((item: MenuItem, idx: number) => (
        <div
          id={item.item}
          key={idx}
          className="relative w-full flex flex-col sm:flex-row items-center justify-center p-2 scroll-mt-12 sm:scroll-mt-16"
        >
          <div
            className="absolute inset-0 -z-10 w-full border-b 
            border-gray-100 dark:border-gray-900 last:border-0 transition-colors duration-(--duration-animate)"
          />

          {/* Image Container: Hidden if the image fails to load */}
          {item.image !== "" && (
            <div className="w-32 h-32 sm:w-40 sm:h-40 shrink-0 mb-4 sm:mb-0 sm:mr-6">
              <div className="relative w-full h-full">
                <Image
                  src={`/assets/menu/${title}/${item.image}.jpg`}
                  alt={item.item}
                  width={160}
                  height={160}
                  className="w-full h-auto rounded-lg shadow-sm object-cover"
                />
              </div>
            </div>
          )}

          {/* Content Container */}
          <div
            className={`flex-1 w-full text-center sm:text-left ${item.image === "" ? "max-w-2xl mx-auto" : ""}`}
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end">
              <h3 className="text-lg sm:text-xl">{item.item}</h3>
              <div className="text-sm sm:text-base font-medium mt-1 sm:mt-0">
                {typeof item.price === "number" ? (
                  <div className="flex justify-center">
                    <PriceTag>
                      ${formatPrice(item.price)}
                      {item.unit && ` / ${item.unit}`}
                    </PriceTag>
                  </div>
                ) : (
                  <div className="flex justify-center gap-3">
                    <PriceDisplay label="small">
                      {`$${formatPrice(item.price.small)}${item.unit ? ` / ${item.unit}` : ""}`}
                    </PriceDisplay>
                    {item.price.medium && (
                      <PriceDisplay label="medium">
                        {`$${formatPrice(item.price.medium)}${item.unit ? ` / ${item.unit}` : ""}`}
                      </PriceDisplay>
                    )}
                    <PriceDisplay label="large">
                      {`$${formatPrice(item.price.large)}${item.unit ? ` / ${item.unit}` : ""}`}
                    </PriceDisplay>
                  </div>
                )}
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
