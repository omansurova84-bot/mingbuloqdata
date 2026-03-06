interface PageHeaderProps {
  title: string;
  description?: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] text-white py-12 mb-8">
      <div className="max-w-[1440px] mx-auto px-6">
        <h1 className="text-4xl font-bold mb-2">{title}</h1>
        {description && (
          <p className="text-blue-100 text-lg">{description}</p>
        )}
      </div>
    </div>
  );
}
