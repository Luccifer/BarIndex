module ApplicationHelper
  
  class Hash
    def compact
      delete_if { |k, v| v.nil? }
    end
  end
  
  def filter_nils(parameters)
    parameters.to_h.compact
  end
  
end
